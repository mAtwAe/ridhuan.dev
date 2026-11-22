/**
 * Decorative, code-inspired hero visual. Purely presentational (aria-hidden):
 * an illustrative Spring Batch step definition, not production code.
 */

type Kind = 'kw' | 'type' | 'fn' | 'str' | 'num' | 'cmt' | 'ann' | 'punc'
type Token = [text: string, kind?: Kind]

const kindClass: Record<Kind, string> = {
  kw: 'text-[#c4a7ff]',
  type: 'text-[#7dd3fc]',
  fn: 'text-[#93b8ff]',
  str: 'text-[#86efac]',
  num: 'text-[#fcd34d]',
  cmt: 'text-fg-subtle italic',
  ann: 'text-[#fcd581]',
  punc: 'text-fg-subtle',
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
  [['    .', 'punc'], ['retryLimit', 'fn'], ['(', 'punc'], ['3', 'num'], [')', 'punc'], ["  // recover, don't fail", 'cmt']],
  [['    .', 'punc'], ['listener', 'fn'], ['(failedRecordTracker)', 'punc']],
  [['    .', 'punc'], ['build', 'fn'], ['();', 'punc']],
  [['}', 'punc']],
]

const pipeline = ['SFTP', 'Validate', 'Persist', 'Cleanup']

export function CodeCard() {
  return (
    <div aria-hidden="true" className="relative select-none">
      {/* Soft halo, kept low so the card reads as an object rather than a light source */}
      <div className="absolute -inset-px rounded-2xl bg-linear-to-b from-accent/40 via-line-strong/40 to-transparent" />
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-accent/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl bg-canvas-deep shadow-[0_30px_80px_-20px_rgb(0_0_0/0.6)]">
        {/* Editor tab bar */}
        <div className="flex items-center justify-between border-b border-line bg-surface/60 px-4">
          <div className="-mb-px flex items-center gap-2 border-b border-accent-fg/70 py-2.5 font-mono text-xs text-fg">
            <span className="size-2 rounded-sm bg-[#f89820]/80" />
            BatchConfig.java
          </div>
          <span className="font-mono text-[0.68rem] text-fg-subtle">Spring Batch</span>
        </div>

        {/* Code */}
        <pre className="overflow-hidden px-4 py-5 font-mono text-[0.66rem] leading-6 sm:text-[0.8rem]">
          {lines.map((tokens, i) => (
            <div key={i} className="flex">
              <span className="mr-5 w-5 shrink-0 text-right text-line-strong">{i + 1}</span>
              <span className="whitespace-pre text-fg-muted">
                {tokens.map(([text, kind], j) => (
                  <span key={j} className={kind ? kindClass[kind] : undefined}>
                    {text}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </pre>

        {/* Pipeline strip */}
        <div className="flex items-center gap-2 border-t border-line px-4 py-3 font-mono text-[0.68rem] text-fg-muted">
          {pipeline.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="flex items-center gap-1.5">
                <span className={`size-1.5 rounded-full ${i === pipeline.length - 1 ? 'bg-emerald-400/80' : 'bg-accent-fg/70'}`} />
                {step}
              </span>
              {i < pipeline.length - 1 && <span className="h-px w-4 bg-line-strong sm:w-6" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
