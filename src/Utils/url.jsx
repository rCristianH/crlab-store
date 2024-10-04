const getLastPathSetment = () => {
  const currentPath = window.location.pathname
  const segment = currentPath.split('/')
  return segment[segment.length - 1]
}

export {getLastPathSetment}