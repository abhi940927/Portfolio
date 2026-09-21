import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface LeetCodeData {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  totalQuestions: number;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

interface TerminalLine {
  type: "command" | "output" | "error" | "success" | "info" | "blank";
  text: string;
  delay?: number;
}

// ─── Terminal Component ────────────────────────────────────────────────────────
const DevTerminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isBooting, setIsBooting] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [leetcode, setLeetcode] = useState<LeetCodeData | null>(null);
  const [github, setGithub] = useState<{ user: GitHubUser; repos: GitHubRepo[] } | null>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => { scrollToBottom(); }, [lines]);

  // ── Fetch Data ──────────────────────────────────────────────────────────────
  const fetchLeetCode = async (): Promise<LeetCodeData | null> => {
    try {
      const res = await fetch("https://leetcode-api-faisalshohag.vercel.app/abhi940927");
      if (!res.ok) throw new Error("fetch failed");
      return await res.json();
    } catch {
      return null;
    }
  };

  const fetchGitHub = async () => {
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch("https://api.github.com/users/abhi940927"),
        fetch("https://api.github.com/users/abhi940927/repos?sort=updated&per_page=4"),
      ]);
      const user: GitHubUser = await userRes.json();
      const repos: GitHubRepo[] = await reposRes.json();
      return { user, repos };
    } catch {
      return null;
    }
  };

  // ── Add lines with delay ────────────────────────────────────────────────────
  const addLine = (line: TerminalLine) =>
    setLines((prev) => [...prev, line]);

  const addLines = async (newLines: TerminalLine[]) => {
    for (const line of newLines) {
      await new Promise((r) => setTimeout(r, line.delay ?? 80));
      setLines((prev) => [...prev, line]);
    }
  };

  // ── Boot sequence ───────────────────────────────────────────────────────────
  useEffect(() => {
    const boot = async () => {
      await addLines([
        { type: "info", text: "██████╗ ███████╗██╗   ██╗", delay: 0 },
        { type: "info", text: "██╔══██╗██╔════╝██║   ██║", delay: 50 },
        { type: "info", text: "██║  ██║█████╗  ██║   ██║", delay: 50 },
        { type: "info", text: "██║  ██║██╔══╝  ╚██╗ ██╔╝", delay: 50 },
        { type: "info", text: "██████╔╝███████╗ ╚████╔╝ ", delay: 50 },
        { type: "info", text: "╚═════╝ ╚══════╝  ╚═══╝  ", delay: 50 },
        { type: "blank", text: "", delay: 100 },
        { type: "success", text: "  Abhinav's Dev Terminal v1.0.0", delay: 200 },
        { type: "output", text: "  Full Stack Developer | Problem Solver", delay: 100 },
        { type: "blank", text: "", delay: 100 },
        { type: "info", text: "  Initializing live data feeds...", delay: 300 },
      ]);

      // Fetch data concurrently
      setIsLoading(true);
      const [lc, gh] = await Promise.all([fetchLeetCode(), fetchGitHub()]);
      setLeetcode(lc);
      setGithub(gh);
      setIsLoading(false);

      await addLines([
        { type: "success", text: "  ✓ LeetCode API connected", delay: 200 },
        { type: "success", text: "  ✓ GitHub API connected", delay: 150 },
        { type: "success", text: "  ✓ Codolio profile linked", delay: 150 },
        { type: "blank", text: "", delay: 100 },
        { type: "output", text: '  Type "help" to see available commands.', delay: 200 },
        { type: "blank", text: "", delay: 50 },
      ]);
      setIsBooting(false);
    };
    boot();
  }, []);

  // ── Command handler ─────────────────────────────────────────────────────────
  const handleCommand = async (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    addLine({ type: "command", text: `abhinav@portfolio:~$ ${cmd}` });

    if (!command) return;

    switch (command) {
      case "help":
        await addLines([
          { type: "blank", text: "" },
          { type: "success", text: "  Available Commands:", delay: 50 },
          { type: "output", text: "  ├─ leetcode   →  LeetCode stats & progress", delay: 60 },
          { type: "output", text: "  ├─ github     →  GitHub profile & recent repos", delay: 60 },
          { type: "output", text: "  ├─ codolio    →  Codolio profile & streak", delay: 60 },
          { type: "output", text: "  ├─ skills     →  Tech stack overview", delay: 60 },
          { type: "output", text: "  ├─ contact    →  Contact information", delay: 60 },
          { type: "output", text: "  └─ clear      →  Clear terminal", delay: 60 },
          { type: "blank", text: "" },
        ]);
        break;

      case "leetcode":
        if (!leetcode) {
          await addLines([
            { type: "blank", text: "" },
            { type: "error", text: "  ✗ Failed to fetch LeetCode data. Check connection.", delay: 100 },
            { type: "blank", text: "" },
          ]);
          break;
        }
        const totalPct = Math.round((leetcode.totalSolved / leetcode.totalQuestions) * 100);
        const easyBar  = "█".repeat(Math.round(leetcode.easySolved / 10)) + "░".repeat(10 - Math.round(leetcode.easySolved / 10));
        const medBar   = "█".repeat(Math.round(leetcode.mediumSolved / 20)) + "░".repeat(10 - Math.round(leetcode.mediumSolved / 20));
        const hardBar  = "█".repeat(Math.round(leetcode.hardSolved / 10)) + "░".repeat(10 - Math.round(leetcode.hardSolved / 10));
        await addLines([
          { type: "blank", text: "" },
          { type: "success", text: "  ⚡ LeetCode Stats — abhi940927", delay: 80 },
          { type: "info",    text: "  ┌─────────────────────────────────────┐", delay: 60 },
          { type: "info",    text: `  │  Total Solved : ${leetcode.totalSolved} / ${leetcode.totalQuestions} (${totalPct}%)`, delay: 60 },
          { type: "info",    text: `  │  Global Rank  : #${leetcode.ranking.toLocaleString()}`, delay: 60 },
          { type: "info",    text:  "  ├─────────────────────────────────────┤", delay: 60 },
          { type: "success", text: `  │  🟢 Easy   : ${String(leetcode.easySolved).padStart(3)}  [${easyBar}]`, delay: 60 },
          { type: "output",  text: `  │  🟡 Medium : ${String(leetcode.mediumSolved).padStart(3)}  [${medBar}]`, delay: 60 },
          { type: "error",   text: `  │  🔴 Hard   : ${String(leetcode.hardSolved).padStart(3)}  [${hardBar}]`, delay: 60 },
          { type: "info",    text: "  └─────────────────────────────────────┘", delay: 60 },
          { type: "output",  text: "  🔗 https://leetcode.com/u/abhi940927/", delay: 60 },
          { type: "blank", text: "" },
        ]);
        break;

      case "github":
        if (!github) {
          await addLines([
            { type: "blank", text: "" },
            { type: "error", text: "  ✗ Failed to fetch GitHub data.", delay: 100 },
            { type: "blank", text: "" },
          ]);
          break;
        }
        await addLines([
          { type: "blank", text: "" },
          { type: "success", text: "  🐙 GitHub Profile — abhi940927", delay: 80 },
          { type: "info",    text: "  ┌─────────────────────────────────────┐", delay: 60 },
          { type: "info",    text: `  │  Public Repos : ${github.user.public_repos}`, delay: 60 },
          { type: "info",    text: `  │  Followers    : ${github.user.followers}`, delay: 60 },
          { type: "info",    text: `  │  Following    : ${github.user.following}`, delay: 60 },
          { type: "info",    text: "  ├─────────────────────────────────────┤", delay: 60 },
          { type: "success", text: "  │  📁 Recent Repositories:", delay: 60 },
          ...github.repos.slice(0, 4).map((repo, i) => ({
            type: "output" as const,
            text: `  │  ${i === github.repos.length - 1 || i === 3 ? "└" : "├"}─ ${repo.name}${repo.language ? ` [${repo.language}]` : ""}`,
            delay: 60,
          })),
          { type: "info",    text: "  └─────────────────────────────────────┘", delay: 60 },
          { type: "output",  text: "  🔗 https://github.com/abhi940927", delay: 60 },
          { type: "blank", text: "" },
        ]);
        break;

      case "codolio":
        await addLines([
          { type: "blank", text: "" },
          { type: "success", text: "  📊 Codolio Profile — abhinav002", delay: 80 },
          { type: "info",    text: "  ┌─────────────────────────────────────┐", delay: 60 },
          { type: "info",    text: "  │  LeetCode Active Days  : 103", delay: 60 },
          { type: "info",    text: "  │  Max Streak            : 43 days 🔥", delay: 60 },
          { type: "info",    text: "  │  Badge                 : 100 Days Badge 🏅", delay: 60 },
          { type: "info",    text: "  │  Platform              : LeetCode via Codolio", delay: 60 },
          { type: "info",    text: "  └─────────────────────────────────────┘", delay: 60 },
          { type: "output",  text: "  🔗 https://codolio.com/profile/abhinav002", delay: 60 },
          { type: "blank", text: "" },
        ]);
        break;

      case "skills":
        await addLines([
          { type: "blank", text: "" },
          { type: "success", text: "  🛠  Tech Stack — abhinav", delay: 80 },
          { type: "info",    text: "  ┌─────────────────────────────────────┐", delay: 60 },
          { type: "output",  text: "  │  Languages  : C++, C, Python, Java, JS, TS", delay: 60 },
          { type: "output",  text: "  │  Frontend   : React, Next.js, HTML, CSS, Tailwind", delay: 60 },
          { type: "output",  text: "  │  Backend    : Node.js, REST APIs, MySQL, MongoDB", delay: 60 },
          { type: "output",  text: "  │  Tools      : Git, GitHub, Postman, Docker, Figma", delay: 60 },
          { type: "info",    text: "  └─────────────────────────────────────┘", delay: 60 },
          { type: "blank", text: "" },
        ]);
        break;

      case "contact":
        await addLines([
          { type: "blank", text: "" },
          { type: "success", text: "  📬 Contact Info", delay: 80 },
          { type: "info",    text: "  ┌─────────────────────────────────────┐", delay: 60 },
          { type: "output",  text: "  │  Email    : abhisingh940927@gmail.com", delay: 60 },
          { type: "output",  text: "  │  LinkedIn : linkedin.com/in/abhinav-singh-124791322", delay: 60 },
          { type: "output",  text: "  │  GitHub   : github.com/abhi940927", delay: 60 },
          { type: "output",  text: "  │  Location : India 🇮🇳", delay: 60 },
          { type: "info",    text: "  └─────────────────────────────────────┘", delay: 60 },
          { type: "blank", text: "" },
        ]);
        break;

      case "clear":
        setLines([]);
        break;

      default:
        await addLines([
          { type: "blank", text: "" },
          { type: "error", text: `  bash: ${command}: command not found`, delay: 80 },
          { type: "output", text: '  Type "help" for available commands.', delay: 60 },
          { type: "blank", text: "" },
        ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const val = currentInput;
      setCurrentInput("");
      handleCommand(val);
    }
  };

  // ── Line color map ───────────────────────────────────────────────────────────
  const lineColor: Record<TerminalLine["type"], string> = {
    command: "#a5f3fc",
    output:  "rgba(200,200,220,0.85)",
    error:   "#f87171",
    success: "#4ade80",
    info:    "#915EFF",
    blank:   "transparent",
  };

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.3, 0.8)}
      className="w-full max-w-3xl mx-auto"
    >
      {/* Terminal window */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "rgba(5,5,15,0.92)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(145,94,255,0.3)",
          boxShadow: "0 0 60px rgba(145,94,255,0.15), 0 24px 48px rgba(0,0,0,0.6)",
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ background: "rgba(145,94,255,0.08)", borderBottom: "1px solid rgba(145,94,255,0.2)" }}
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="flex-1 text-center text-[12px] font-mono text-[#915EFF]/70 tracking-widest">
            abhinav@portfolio — zsh
          </span>
          {isLoading && (
            <span className="text-[11px] text-yellow-400 font-mono animate-pulse">fetching...</span>
          )}
        </div>

        {/* Terminal body */}
        <div
          ref={terminalBodyRef}
          className="h-[420px] overflow-y-auto px-5 py-4 font-mono text-[13px] leading-relaxed cursor-text"
          onClick={() => inputRef.current?.focus()}
          style={{ scrollbarWidth: "thin", scrollbarColor: "#915EFF20 transparent" }}
        >
          <AnimatePresence>
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.12 }}
                className="whitespace-pre"
                style={{ color: lineColor[line.type], minHeight: "1.4em" }}
              >
                {line.type === "success" && line.text.includes("LeetCode") ? (
                  <span style={{ color: "#facc15" }}>{line.text}</span>
                ) : (
                  line.text
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Input line */}
          {!isBooting && (
            <div className="flex items-center gap-2 mt-1">
              <span style={{ color: "#4ade80" }}>abhinav</span>
              <span style={{ color: "#915EFF" }}>@portfolio</span>
              <span style={{ color: "rgba(200,200,220,0.6)" }}>:~$</span>
              <input
                ref={inputRef}
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none caret-[#915EFF]"
                style={{ color: "#a5f3fc" }}
                placeholder="type a command..."
                spellCheck={false}
              />
            </div>
          )}

          {isBooting && (
            <div className="flex items-center gap-2 mt-1">
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-block w-2 h-4 bg-[#915EFF]"
              />
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Quick command pills */}
        {!isBooting && (
          <div
            className="flex flex-wrap gap-2 px-5 py-3"
            style={{ borderTop: "1px solid rgba(145,94,255,0.15)" }}
          >
            {["help", "leetcode", "github", "codolio", "skills", "contact", "clear"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="text-[11px] font-mono px-3 py-1 rounded-lg transition-all duration-200"
                style={{
                  background: "rgba(145,94,255,0.1)",
                  border: "1px solid rgba(145,94,255,0.25)",
                  color: "#a476ff",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.background = "rgba(145,94,255,0.25)";
                  (e.target as HTMLButtonElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.background = "rgba(145,94,255,0.1)";
                  (e.target as HTMLButtonElement).style.color = "#a476ff";
                }}
              >
                {cmd}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ─── Section Wrapper ───────────────────────────────────────────────────────────
const TerminalSection = () => {
  return (
    <>
      <motion.div variants={fadeIn("", "", 0, 0.5)} className="mb-10">
        <p className="text-[#aaa6c3] text-[14px] uppercase tracking-widest mb-1">
          Live Stats
        </p>
        <h2 className="text-white text-[32px] font-black">
          Dev <span className="text-[#915EFF]">Terminal</span>
        </h2>
        <p className="text-secondary text-[15px] mt-2 max-w-lg">
          An interactive terminal with live data from LeetCode, GitHub & Codolio. Type a command or click a pill below.
        </p>
      </motion.div>
      <DevTerminal />
    </>
  );
};

export default SectionWrapper(TerminalSection, "terminal");
