import type { Component } from "solid-js";
import { TraversalOutputComponentKeyboardParentFocus } from "./priority-traversal-parent-focus";

import { stackedBarChartHypergraph } from "./input-data";

const App: Component = () => {
  const path = window.location.pathname;

  const pathPrefix = path.includes("benthic") ? "/benthic" : "";
  return (
    <TraversalOutputComponentKeyboardParentFocus
      nodeGraph={stackedBarChartHypergraph}
      showHypergraph={false}
    />
  );
};

export default App;
