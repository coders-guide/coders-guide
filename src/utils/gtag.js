export const gtagEvent = nodeIndex => {
  if (!window.dataLayer) {
    return;
  }
  window.dataLayer.push({ event: "node-change", nodeIndex: nodeIndex });
};
