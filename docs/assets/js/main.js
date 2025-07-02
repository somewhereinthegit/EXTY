function loadGraph(jsonPath, targetId, graphTitle) {
  fetch(jsonPath)
    .then(response => response.json())
    .then(data => {
      const traces = data.map(traj => {
        const startX = traj.x[0];
        const startY = traj.y[0];
        const endX = traj.x[traj.x.length - 1];
        const endY = traj.y[traj.y.length - 1];

        return {
          x: traj.x,
          y: traj.y,
          mode: 'lines+markers',
          name: traj.label,
          line: { color: traj.color, width: 3 },
          marker: { size: 6 }
        };
      });

      // Ajout des annotations de quadrants + début et fin
      const annotations = [
        { x: 6, y: 6, text: 'Harmonized', showarrow: false, font: { size: 14, color: 'gray' } },
        { x: -6, y: 6, text: 'Innocent', showarrow: false, font: { size: 14, color: 'gray' } },
        { x: -6, y: -6, text: 'Withdrawn', showarrow: false, font: { size: 14, color: 'gray' } },
        { x: 6, y: -6, text: 'Strategist', showarrow: false, font: { size: 14, color: 'gray' } }
      ];

      // Ajout dynamique des points de départ et fin pour chaque trajectoire
      data.forEach(traj => {
        const startX = traj.x[0];
        const startY = traj.y[0];
        const endX = traj.x[traj.x.length - 1];
        const endY = traj.y[traj.y.length - 1];

        annotations.push(
          {
            x: startX,
            y: startY,
            text: '🔵 Start',
            showarrow: true,
            arrowhead: 2,
            ax: 20,
            ay: -20,
            font: { size: 12, color: traj.color }
          },
          {
            x: endX,
            y: endY,
            text: '🔴 End',
            showarrow: true,
            arrowhead: 2,
            ax: -20,
            ay: 20,
            font: { size: 12, color: traj.color }
          }
        );
      });

      const layout = {
        title: graphTitle,
        xaxis: { range: [-10, 10], title: 'Knowledge (x)' },
        yaxis: { range: [-10, 10], title: 'Presence (y)' },
        showlegend: true,
        annotations: annotations
      };

      Plotly.newPlot(targetId, traces, layout);
    });
}


loadGraph('./assets/data/graph1.json', 'graph1', '🧨 Parabolic Collapse');
loadGraph('./assets/data/graph2.json', 'graph2', '🔄 Inverse Parabola');
loadGraph('./assets/data/graph3.json', 'graph3', '🌅 Diagonal Redemption');
loadGraph('./assets/data/graph4.json', 'graph4', '⚠️ Diagonal Fall');
loadGraph('./assets/data/spiral1.json', 'spiral1', '🕊️ Resonant Recentring');
loadGraph('./assets/data/spiral2.json', 'spiral2', '🌪️ Outward Fragmentation');
loadGraph('./assets/data/spiral3.json', 'spiral3', '🕳️ Collapse Spiral');
loadGraph('./assets/data/spiral4.json', 'spiral4', '🧊 Perverse Ascension');
loadGraph('./assets/data/spiral5.json', 'spiral5', '🌊 Redemptive Oscillation');
loadGraph('./assets/data/spiral6.json', 'spiral6', '🧿 False Centering Spiral');
loadGraph('./assets/data/spiral7.json', 'spiral7', '🎭 Loop of Seduction');
loadGraph('./assets/data/spiral8.json', 'spiral8', '🪶 Vertical Spiral of Grace');
loadGraph('./assets/data/spiral9.json', 'spiral9', '⚖️ Chaotic Bifurcation Spiral');
