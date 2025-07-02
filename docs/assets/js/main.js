fetch('./assets/data/trajectories.json')
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
      title: 'Relational Trajectories on the (x, y) Plane',
      xaxis: { range: [-10, 10], title: 'Knowledge (x)' },
      yaxis: { range: [-10, 10], title: 'Presence (y)' },
      showlegend: true
    };

    Plotly.newPlot('graph', traces, layout);
  });

