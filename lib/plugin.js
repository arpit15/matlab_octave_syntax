var codemirror = require('@jupyterlab/codemirror');

module.exports = [{
    id: 'matlab_octave_syntax',
    autoStart: true,
    activate: function(app) {
      console.log('JupyterLab extension matlab_octave_syntax is activated!');
      console.log(app);
      let test = codemirror.Mode.getModeInfo();

      // console.log(test.length);
      test.unshift({
        name: "aaOctave", mime: "text/x-octave", mode: "octave", ext: ["m"]
      });
      // console.log(test.length);

      // console.log(test);
    }
}];
  