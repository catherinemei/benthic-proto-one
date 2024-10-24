import type { Component } from "solid-js";
import { TraversalOutputComponentKeyboardParentFocus } from "./priority-traversal-parent-focus";

import { stackedBarChartHypergraph } from "./input-stacked-bar";

const App: Component = () => {
  return (
    <TraversalOutputComponentKeyboardParentFocus
      nodeGraph={stackedBarChartHypergraph}
      showHypergraph={false}
    />
  );
};

export default App;
