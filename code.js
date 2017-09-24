$(function () {
    var graph = sigma.init(document.getElementById('graph')).drawingProperties({
        defaultLabelColor: '#fff',
        defaultLabelSize: 12,
        defaultLabelBGColor: '#fff',
        defaultLabelHoverColor: '#000',
        labelThreshold: 6,
        defaultEdgeType: 'curve'
    }).graphProperties({
        minNodeSize: 0.5,
        maxNodeSize: 2,
        minEdgeSize: 1,
        maxEdgeSize: 1
    }).mouseProperties({
        maxRatio: 32
    });
    graph.parseGexf('final.gexf');
    graph.draw();
});
