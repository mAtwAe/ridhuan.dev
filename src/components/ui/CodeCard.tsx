/**
 * Decorative, code-inspired hero visual. Purely presentational (aria-hidden):
 * an illustrative Spring Batch step definition, not production code.
 */

type Token = [text: string, kind?: 'kw' | 'type' | 'fn' | 'str' | 'num' | 'cmt' | 'ann' | 'punc']

const kindClass: Record<NonNullable<Token[1]>, string> = {
  kw: 'text-violet-300',
  type: 'text-sky-300',
  fn: 'text-blue-300',
  str: 'text-emerald-300',
  num: 'text-amber-300',
  cmt: 'text-slate-500 italic',
  ann: 'text-amber-200/90',
  punc: 'text-slate-500',
}

const lines: Token[][] = [
  [['@Bean', 'ann']],
  [['public ', 'kw'], ['Step ', 'type'], ['transferStep', 'fn'], ['() {', 'punc']],
  [['  return new ', 'kw'], ['StepBuilder', 'type'], ['(', 'punc'], ['"transfer"', 'str'], [', repo)', 'punc']],
  [['    .<', 'punc'], ['Record', 'type'], [', ', 'punc'], ['Payload', 'type'], ['>', 'punc'], ['chunk', 'fn'], ['(', 'punc'], ['100', 'num'], [', tx)', 'punc']],
  [['    .', 'punc'], ['reader', 'fn'], ['(sftpReader())', 'punc']],
  [['    .', 'punc'], ['processor', 'fn'], ['(validator())', 'punc']],
  [['    .', 'punc'], ['writer', 'fn'], ['(dbWriter())', 'punc']],
  [['    .', 'punc'], ['faultTolerant', 'fn'], ['()', 'punc']],
  [['    .', 'punc'], ['retryLimit', 'fn'], ['(', 'punc'], ['3', 'num'], [')', 'punc'], ['  // recover, don\'t fail', 'cmt']],
  [['    .', 'punc'], ['listener', 'fn'], ['(failedRecordTracker)', 'punc']],
  [['    .', 'punc'], ['build', 'fn'], ['();', 'punc']],
  [['}', 'punc']],
]

const pipeline = ['SFTP', 'Validate', 'Persist', 'Cleanup']

export function CodeCard() {
  return (
    <div aria-hidden="true" className="relative select-none">
      {/* Glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-accent/20 opacity-60 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-ink-950/90 shadow-2xl shadow-black/40">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-slate-700" />
          <span className="size-2.5 rounded-full bg-slate-700" />
          <span className="size-2.5 rounded-full bg-slate-700" />
          <span className="ml-3 font-mono text-xs text-slate-500">BatchConfig.java</span>
        </div>

        {/* Code */}
        <pre className="overflow-hidden px-4 py-4 font-mono text-[0.66rem] leading-6 sm:text-[0.8rem]">
          {lines.map((tokens, i) => (
            <div key={i} className="flex">
              <span className="mr-4 w-5 shrink-0 text-right text-slate-700">{i + 1}</span>
              <span className="whitespace-pre text-slate-300">
                {tokens.map(([text, kind], j) => (
                  <span key={j} className={kind ? kindClass[kind] : undefined}>
                    {text}
                  </span>
                ))}
                {i === lines.length - 1 && <span className="caret ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 bg-accent-soft" />}
              </span>
            </div>
          ))}
        </pre>

        {/* Pipeline strip */}
        <div className="flex items-center gap-1.5 border-t border-line bg-ink-900/60 px-4 py-3 font-mono text-[0.68rem] text-slate-400">
          {pipeline.map((step, i) => (
            <div key={step} className="flex items-center gap-1.5">
              <span className="rounded-md border border-line bg-white/[0.03] px-2 py-0.5">{step}</span>
              {i < pipeline.length - 1 && <span className="text-slate-600">→</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
