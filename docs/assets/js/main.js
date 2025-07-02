function loadGraph(jsonPath, targetId, graphTitle) {
  fetch(jsonPath)
    .then(response => response.json())
    .then(data => {
      const traces = data.map(traj => ({
        x: traj.x,
        y: traj.y,
        mode: 'lines+markers',
        name: traj.label,
        line: { color: traj.color, width: 3 }
      }));

      const layout = {
        title: graphTitle,
        xaxis: { range: [-10, 10], title: 'Knowledge (x)' },
        yaxis: { range: [-10, 10], title: 'Presence (y)' },
        showlegend: true,
        annotations: [
          { x: 6, y: 6, text: 'Harmonized', showarrow: false, font: { size: 14, color: 'gray' } },
          { x: -6, y: 6, text: 'Innocent', showarrow: false, font: { size: 14, color: 'gray' } },
          { x: -6, y: -6, text: 'Withdrawn', showarrow: false, font: { size: 14, color: 'gray' } },
          { x: 6, y: -6, text: 'Strategist', showarrow: false, font: { size: 14, color: 'gray' } }
        ]
      };

      Plotly.newPlot(targetId, traces, layout);
    });
}

loadGraph('./assets/data/graph1.json', 'graph1', 'Parabolic Collapse');
loadGraph('./assets/data/graph2.json', 'graph2', 'Inverse Parabola');
loadGraph('./assets/data/graph3.json', 'graph3', 'Diagonal Redemption');
loadGraph('./assets/data/graph4.json', 'graph4', 'Diagonal Fall');
loadGraph('./assets/data/spiral1.json', 'spiral1', 'Resonant Recentring');
