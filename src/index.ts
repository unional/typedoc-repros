/**
 * Some code reproducing a bug.
 */
export namespace foo {
  export type Options = { a: number }
}

export function foo(_options: foo.Options) { }
