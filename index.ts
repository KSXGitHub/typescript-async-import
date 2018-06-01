async function main () {
  const promise = import('./lib')
  const lib = await promise
  console.info({promise, lib})
  console.info(lib.foo())
}

main().then(
  () => console.info('ok'),
  err => console.error(err)
)
