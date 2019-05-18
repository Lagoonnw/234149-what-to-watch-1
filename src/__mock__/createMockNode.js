export function createNodeMock(element) {
  if (element.type === `video`) {
    return {};
  }
  return null;
}
