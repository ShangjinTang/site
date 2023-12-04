"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8967],{2938:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"site/change-default-fonts","metadata":{"permalink":"/site/zh-CN/blog/site/change-default-fonts","source":"@site/blog/2023-12-03-site-change-default-fonts/index.mdx","title":"Change Default Fonts","description":"Default fonts are now changed to:","date":"2023-12-03T00:00:00.000Z","formattedDate":"2023\u5e7412\u67083\u65e5","tags":[{"label":"site","permalink":"/site/zh-CN/blog/tags/site"},{"label":"font","permalink":"/site/zh-CN/blog/tags/font"}],"hasTruncateMarker":false,"authors":[{"name":"Shangjin Tang","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://www.szdev.com/blog/images/avatar.jpg","key":"sol"}],"frontMatter":{"authors":["sol"],"slug":"site/change-default-fonts","tags":["site","font"]},"unlisted":false,"nextItem":{"title":"Interactive Map with Leaflet","permalink":"/site/zh-CN/blog/mdx/interactive-map-with-leaflet"}},"content":"Default fonts are now changed to:\\n\\n- `Optimistic Display` (for normal text)\\n- `Source Code Pro` (for monospaced text)"},{"id":"mdx/interactive-map-with-leaflet","metadata":{"permalink":"/site/zh-CN/blog/mdx/interactive-map-with-leaflet","source":"@site/blog/2023-11-29-mdx-interactive-map-with-leaflet/index.mdx","title":"Interactive Map with Leaflet","description":"Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps.","date":"2023-11-29T00:00:00.000Z","formattedDate":"2023\u5e7411\u670829\u65e5","tags":[{"label":"mdx","permalink":"/site/zh-CN/blog/tags/mdx"},{"label":"map","permalink":"/site/zh-CN/blog/tags/map"},{"label":"leaflet","permalink":"/site/zh-CN/blog/tags/leaflet"}],"hasTruncateMarker":true,"authors":[{"name":"Shangjin Tang","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://www.szdev.com/blog/images/avatar.jpg","key":"sol"}],"frontMatter":{"authors":["sol"],"slug":"mdx/interactive-map-with-leaflet","tags":["mdx","map","leaflet"]},"unlisted":false,"prevItem":{"title":"Change Default Fonts","permalink":"/site/zh-CN/blog/site/change-default-fonts"},"nextItem":{"title":"Support TensorFlow.js","permalink":"/site/zh-CN/blog/mdx/support-tensorflow-js"}},"content":"[**Leaflet**](https://leafletjs.com/) is the leading open-source JavaScript library for mobile-friendly interactive maps.\\n\\nWe\'ll draw a interactive map with **Leaflet**.\\n\\n\x3c!-- truncate --\x3e\\n\\nimport React, {useEffect, useRef} from \'react\';\\n\\nexport const MyLeafletMap = ({position}) => {\\n  const mapRef = useRef(null);\\n\\nuseEffect(() => { const link = document.createElement(\'link\'); link.rel = \'stylesheet\'; link.href = \'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css\'; link.integrity = \'sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=\'; link.crossOrigin = \'\'; const head = document.head || document.getElementsByTagName(\'head\')[0]; head.appendChild(link);\\n\\n    const L = require(\'leaflet\');\\n    const map = L.map(mapRef.current).setView(position, 13);\\n\\n    L.tileLayer(\'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\', {\\n        attribution: \'&copy; <a href=\\"https://www.openstreetmap.org/copyright\\">OpenStreetMap</a> contributors\',\\n    }).addTo(map);\\n\\n    const marker = L.marker(position).addTo(map);\\n    marker.bindPopup(\'A pretty CSS3 popup.<br>Easily customizable.\').openPopup();\\n\\n    map.dragging.enable();\\n\\n}, []);\\n\\nreturn <div id=\\"map\\" style={{aspectRatio: \'16/9\'}} ref={mapRef}></div> }\\n\\n<MyLeafletMap position={[31.23, 121.47]}></MyLeafletMap>"},{"id":"mdx/support-tensorflow-js","metadata":{"permalink":"/site/zh-CN/blog/mdx/support-tensorflow-js","source":"@site/blog/2023-11-28-mdx-support-tensorflow-js/index.mdx","title":"Support TensorFlow.js","description":"We even support TensorFlow.js in MDX with React.","date":"2023-11-28T00:00:00.000Z","formattedDate":"2023\u5e7411\u670828\u65e5","tags":[{"label":"mdx","permalink":"/site/zh-CN/blog/tags/mdx"},{"label":"tensorflow","permalink":"/site/zh-CN/blog/tags/tensorflow"},{"label":"tensorflow-js","permalink":"/site/zh-CN/blog/tags/tensorflow-js"}],"hasTruncateMarker":true,"authors":[{"name":"Shangjin Tang","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://www.szdev.com/blog/images/avatar.jpg","key":"sol"}],"frontMatter":{"authors":["sol"],"slug":"mdx/support-tensorflow-js","tags":["mdx","tensorflow","tensorflow-js"]},"unlisted":false,"prevItem":{"title":"Interactive Map with Leaflet","permalink":"/site/zh-CN/blog/mdx/interactive-map-with-leaflet"},"nextItem":{"title":"Support Mermaid Diagrams","permalink":"/site/zh-CN/blog/mdx/support-mermaid-diagrams"}},"content":"We even support **TensorFlow.js** in **MDX** with **React**.\\n\\n\x3c!-- truncate --\x3e\\n\\nimport BrowserWindow from \'@site/src/components/BrowserWindow\';\\n\\nimport * as tf from \'@tensorflow/tfjs\';\\nimport {useEffect, useState} from \'react\';\\n\\nexport const Predict = ({xsData, ysData, input}) => {\\n  const [prediction, setPrediction] = useState(\'Loading...\');\\n  useEffect(() => {\\n    const runPrediction = async () => {\\n      const model = tf.sequential();\\n      model.add(tf.layers.dense({units: 1, inputShape: [1]}));\\n      model.compile({loss: \'meanSquaredError\', optimizer: \'sgd\'});\\n      // Reshape data to 2D for training.\\n      const xs = tf.tensor2d(xsData, [xsData.length, 1]);\\n      const ys = tf.tensor2d(ysData, [ysData.length, 1]);\\n      // Train the model using the data.\\n      await model.fit(xs, ys, {\\n        epochs: 10,\\n        callbacks: {\\n          onEpochEnd: (epoch, log) => console.log(`Epoch ${epoch}: loss = ${log.loss}`),\\n        },\\n      });\\n      // Use the model to do inference on the provided input.\\n      const result = model.predict(tf.tensor2d([input], [1, 1]));\\n      const predictionValue = result.dataSync()[0];\\n      setPrediction(predictionValue);\\n    };\\n    runPrediction();\\n  }, []); // passing an empty array as the dependency to only trigger once in lifecycle\\n  return prediction !== undefined ? prediction : \'Loading...\';\\n};\\n\\nTraining Data:\\n\\n- xs = [1, 3, 6, 10, 15]\\n- ys = [1, 5, 11, 19, 29]\\n\\nInference result for data 8:\\n\\n- <Highlight color=\\"#1877F2\\">\\n    {\' \'}\\n    <Predict xsData={[1, 3, 6, 10, 15]} ysData={[1, 5, 11, 19, 29]} input={8}></Predict>{\' \'}\\n  </Highlight>\\n\\n:::tip\\n\\n- Use inspection tool to see logs of training, such as `F12` in Chrome.\\n- Refresh the page to see different inference result.\\n\\n:::\\n\\n## React Function Definition\\n\\n```mdx-code-block\\n<BrowserWindow>\\n```\\n\\n```jsx\\nimport * as tf from \'@tensorflow/tfjs\';\\nimport {useEffect, useState} from \'react\';\\n\\nexport const Predict = ({xsData, ysData, input}) => {\\n  const [prediction, setPrediction] = useState(\'Loading...\');\\n  useEffect(() => {\\n    const runPrediction = async () => {\\n      const model = tf.sequential();\\n      model.add(tf.layers.dense({units: 1, inputShape: [1]}));\\n      model.compile({loss: \'meanSquaredError\', optimizer: \'sgd\'});\\n      // Reshape data to 2D for training.\\n      const xs = tf.tensor2d(xsData, [xsData.length, 1]);\\n      const ys = tf.tensor2d(ysData, [ysData.length, 1]);\\n      // Train the model using the data.\\n      await model.fit(xs, ys, {\\n        epochs: 10,\\n        callbacks: {\\n          onEpochEnd: (epoch, log) => console.log(`Epoch ${epoch}: loss = ${log.loss}`),\\n        },\\n      });\\n      // Use the model to do inference on the provided input.\\n      const result = model.predict(tf.tensor2d([input], [1, 1]));\\n      const predictionValue = result.dataSync()[0];\\n      setPrediction(predictionValue);\\n    };\\n    runPrediction();\\n  }, []); // passing an empty array as the dependency to only trigger once in lifecycle\\n  return prediction !== undefined ? prediction : \'Loading...\';\\n};\\n```\\n\\n```mdx-code-block\\n</BrowserWindow>\\n```\\n\\n## React Function Usage\\n\\n```mdx-code-block\\n<BrowserWindow>\\n```\\n\\n```jsx\\n<Predict xsData={[1, 3, 6, 10, 15]} ysData={[1, 5, 11, 19, 29]} input={8}></Predict>\\n```\\n\\n```mdx-code-block\\n</BrowserWindow>\\n```"},{"id":"mdx/support-mermaid-diagrams","metadata":{"permalink":"/site/zh-CN/blog/mdx/support-mermaid-diagrams","source":"@site/blog/2023-11-27-mdx-support-mermaid-diagrams/index.md","title":"Support Mermaid Diagrams","description":"Mermaid is a diagramming and charting tool.","date":"2023-11-27T00:00:00.000Z","formattedDate":"2023\u5e7411\u670827\u65e5","tags":[{"label":"mdx","permalink":"/site/zh-CN/blog/tags/mdx"},{"label":"mermaid","permalink":"/site/zh-CN/blog/tags/mermaid"},{"label":"diagram","permalink":"/site/zh-CN/blog/tags/diagram"},{"label":"flowchart","permalink":"/site/zh-CN/blog/tags/flowchart"}],"hasTruncateMarker":true,"authors":[{"name":"Shangjin Tang","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://www.szdev.com/blog/images/avatar.jpg","key":"sol"}],"frontMatter":{"authors":["sol"],"slug":"mdx/support-mermaid-diagrams","tags":["mdx","mermaid","diagram","flowchart"]},"unlisted":false,"prevItem":{"title":"Support TensorFlow.js","permalink":"/site/zh-CN/blog/mdx/support-tensorflow-js"},"nextItem":{"title":"Support Global Tabs TabItem","permalink":"/site/zh-CN/blog/mdx/support-global-tabs-tabitem"}},"content":"Mermaid is a diagramming and charting tool.\\n\\nSee [Mermaid Tutorials](https://mermaid.js.org/config/Tutorials.html) and play with [Mermaid Live Editor](https://mermaid.live/).\\n\\n\x3c!-- truncate --\x3e\\n\\n## Sequence Diagram\\n\\n````md title=\\"Example Mermaid sequence diagram\\"\\n```mermaid\\ngraph TD;\\n    A--\x3eB;\\n    A--\x3eC;\\n    B--\x3eD;\\n    C--\x3eD;\\n```\\n````\\n\\n```mermaid\\nsequenceDiagram\\n    Alice->>+John: Hello John, how are you?\\n    Alice->>+John: John, can you hear me?\\n    John--\x3e>-Alice: Hi Alice, I can hear you!\\n    John--\x3e>-Alice: I feel great!\\n```\\n\\n## FlowChart\\n\\n````md title=\\"Example Mermaid flowchart\\"\\n```mermaid\\nflowchart TD\\n    A[Christmas] --\x3e|Get money| B(Go shopping)\\n    B --\x3e C{Let me think}\\n    C --\x3e|One| D[Laptop]\\n    C --\x3e|Two| E[iPhone]\\n    C --\x3e|Three| F[fa:fa-car Car]\\n```\\n````\\n\\n```mermaid\\nflowchart TD\\n    A[Christmas] --\x3e|Get money| B(Go shopping)\\n    B --\x3e C{Let me think}\\n    C --\x3e|One| D[Laptop]\\n    C --\x3e|Two| E[iPhone]\\n    C --\x3e|Three| F[fa:fa-car Car]\\n```"},{"id":"mdx/support-global-tabs-tabitem","metadata":{"permalink":"/site/zh-CN/blog/mdx/support-global-tabs-tabitem","source":"@site/blog/2023-11-26-mdx-support-global-tabs-tabitem/index.md","title":"Support Global Tabs TabItem","description":"Docusaurus provides the `` component that you can use in Markdown thanks to MDX:","date":"2023-11-26T00:00:00.000Z","formattedDate":"2023\u5e7411\u670826\u65e5","tags":[{"label":"mdx","permalink":"/site/zh-CN/blog/tags/mdx"},{"label":"tabs","permalink":"/site/zh-CN/blog/tags/tabs"},{"label":"tabitem","permalink":"/site/zh-CN/blog/tags/tabitem"}],"hasTruncateMarker":false,"authors":[{"name":"Shangjin Tang","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://www.szdev.com/blog/images/avatar.jpg","key":"sol"}],"frontMatter":{"authors":["sol"],"slug":"mdx/support-global-tabs-tabitem","tags":["mdx","tabs","tabitem"]},"unlisted":false,"prevItem":{"title":"Support Mermaid Diagrams","permalink":"/site/zh-CN/blog/mdx/support-mermaid-diagrams"},"nextItem":{"title":"Support Math LaTeX","permalink":"/site/zh-CN/blog/mdx/support-math-latex"}},"content":"Docusaurus provides the `<Tabs>` component that you can use in Markdown thanks to MDX:\\n\\nWe configured it globally so it\'s a feature available from everywhere."},{"id":"mdx/support-math-latex","metadata":{"permalink":"/site/zh-CN/blog/mdx/support-math-latex","source":"@site/blog/2023-11-24-mdx-support-math-latex/index.md","title":"Support Math LaTeX","description":"Mathematical equations can be rendered using KaTeX.","date":"2023-11-24T00:00:00.000Z","formattedDate":"2023\u5e7411\u670824\u65e5","tags":[{"label":"mdx","permalink":"/site/zh-CN/blog/tags/mdx"},{"label":"math","permalink":"/site/zh-CN/blog/tags/math"},{"label":"latex","permalink":"/site/zh-CN/blog/tags/latex"},{"label":"katex","permalink":"/site/zh-CN/blog/tags/katex"}],"hasTruncateMarker":true,"authors":[{"name":"Shangjin Tang","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://www.szdev.com/blog/images/avatar.jpg","key":"sol"}],"frontMatter":{"authors":["sol"],"slug":"mdx/support-math-latex","tags":["mdx","math","latex","katex"]},"unlisted":false,"prevItem":{"title":"Support Global Tabs TabItem","permalink":"/site/zh-CN/blog/mdx/support-global-tabs-tabitem"},"nextItem":{"title":"React \u652f\u6301","permalink":"/site/zh-CN/blog/mdx/react-support"}},"content":"Mathematical equations can be rendered using [KaTeX](https://katex.org).\\n\\nThis document only shows usage. for installation, see [Docusaurus - Math Equations](https://docusaurus.io/docs/markdown-features/math-equations).\\n\\n\x3c!--truncate--\x3e\\n\\n## Usage {#usage}\\n\\nPlease read [KaTeX](https://katex.org) documentation for more details.\\n\\n### Inline {#inline}\\n\\nWrite inline math equations by wrapping LaTeX equations between `$`:\\n\\n```latex\\nLet $f\\\\colon[a,b]\\\\to\\\\R$ be Riemann integrable. Let $F\\\\colon[a,b]\\\\to\\\\R$ be\\n$F(x)=\\\\int_{a}^{x} f(t)\\\\,dt$. Then $F$ is continuous, and at all $x$ such that\\n$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F\'(x)=f(x)$.\\n```\\n\\nLet $f\\\\colon[a,b] \\\\to \\\\R$ be Riemann integrable. Let $F\\\\colon[a,b]\\\\to\\\\R$ be $F(x)=\\n\\\\int_{a}^{x} f(t)\\\\,dt$. Then $F$ is continuous, and at all $x$ such that $f$ is continuous at $x$, $F$ is differentiable at $x$ with $F\'(x)=f(x)$.\\n\\n### Blocks {#blocks}\\n\\nFor equation block, use line breaks and `$$`:\\n\\n```latex\\n$$\\nI = \\\\int_0^{2\\\\pi} \\\\sin(x)\\\\,dx\\n$$\\n```\\n\\n$$\\nI = \\\\int_0^{2\\\\pi} \\\\sin(x)\\\\,dx\\n$$"},{"id":"mdx/react-support","metadata":{"permalink":"/site/zh-CN/blog/mdx/react-support","source":"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-11-23-mdx-react-support/index.mdx","title":"React \u652f\u6301","description":"\u535a\u5ba2\u6587\u7ae0\u652f\u6301 Docusaurus Markdown \u529f\u80fd\uff0c\u4f8b\u5982 MDX\u3002","date":"2023-11-23T00:00:00.000Z","formattedDate":"2023\u5e7411\u670823\u65e5","tags":[{"label":"mdx","permalink":"/site/zh-CN/blog/tags/mdx"},{"label":"react","permalink":"/site/zh-CN/blog/tags/react"}],"hasTruncateMarker":true,"authors":[{"name":"Shangjin Tang","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://www.szdev.com/blog/images/avatar.jpg","key":"sol"}],"frontMatter":{"authors":["sol"],"slug":"mdx/react-support","tags":["mdx","react"]},"unlisted":false,"prevItem":{"title":"Support Math LaTeX","permalink":"/site/zh-CN/blog/mdx/support-math-latex"},"nextItem":{"title":"\u6b22\u8fce","permalink":"/site/zh-CN/blog/welcome"}},"content":"\u535a\u5ba2\u6587\u7ae0\u652f\u6301 [Docusaurus Markdown \u529f\u80fd](https://docusaurus.io/docs/markdown-features)\uff0c\u4f8b\u5982 [MDX](https://mdxjs.com/)\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n## \u4ea4\u4e92\u5f0f {#interactive}\\n\\n:::tip\\n\\n\u4f7f\u7528 React \u7684\u5f3a\u5927\u529f\u80fd\u6765\u521b\u5efa\u4ea4\u4e92\u5f0f\u535a\u5ba2\u6587\u7ae0\u3002\\n\\n```js\\n<button onClick={() => alert(\'\u6309\u94ae\u88ab\u70b9\u51fb\u4e86!\')}>\u70b9\u51fb\u8fd9\u91cc\uff01</button>\\n```\\n\\n<button onClick={() => alert(\'\u6309\u94ae\u88ab\u70b9\u51fb\u4e86!\')}>\u70b9\u51fb\u8fd9\u91cc\uff01</button>\\n\\n:::\\n\\n## \u56fe\u8868\u5f0f {#diagram}\\n\\n:::tip\\n\\n\u4f7f\u7528 React \u7684\u5f3a\u5927\u529f\u80fd\u6765\u521b\u5efa\u56fe\u8868\u3002\\n\\n```mdx\\nimport {Chart} from \'./_asset/snowfall.js\';\\nexport const year = 2013;\\n\\n# \u53bb\u5e74\u964d\u96ea\\n\\n{year} \u5e74\u7684\u964d\u96ea\u91cf\u9ad8\u4e8e\u5e73\u5747\u6c34\u5e73\u3002 \u968f\u4e4b\u800c\u6765\u7684\u6696\u6625\uff0c\u5bfc\u81f4\u9644\u8fd1\u8bb8\u591a\u6cb3\u6d41\u53d1\u751f\u6d2a\u6c34\u3002\\n\\n<Chart year={year} color=\\"#fcb32c\\" />;\\n```\\n\\nimport {Chart} from \'./_asset/snowfall.js\';\\nexport const year = 2013;\\n\\n<h1>\u53bb\u5e74\u964d\u96ea</h1>\\n<p>{year} \u5e74\u7684\u964d\u96ea\u91cf\u9ad8\u4e8e\u5e73\u5747\u6c34\u5e73\u3002 \u968f\u4e4b\u800c\u6765\u7684\u6696\u6625\uff0c\u5bfc\u81f4\u9644\u8fd1\u8bb8\u591a\u6cb3\u6d41\u53d1\u751f\u6d2a\u6c34\u3002</p>\\n<Chart year={year} color=\\"#fcb32c\\" />\\n\\n:::"},{"id":"welcome","metadata":{"permalink":"/site/zh-CN/blog/welcome","source":"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2019-05-28-welcome/index.md","title":"\u6b22\u8fce","description":"Docusaurus \u535a\u5ba2\u529f\u80fd \u7531 blog \u63d2\u4ef6 \u63d0\u4f9b\u652f\u6301\u3002","date":"2019-05-28T00:00:00.000Z","formattedDate":"2019\u5e745\u670828\u65e5","tags":[{"label":"docusaurus","permalink":"/site/zh-CN/blog/tags/docusaurus"}],"hasTruncateMarker":true,"authors":[{"name":"Shangjin Tang","title":"\u5168\u6808\u5f00\u53d1\u8005","imageURL":"https://www.szdev.com/blog/images/avatar.jpg","key":"sol"}],"frontMatter":{"slug":"welcome","authors":["sol"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"React \u652f\u6301","permalink":"/site/zh-CN/blog/mdx/react-support"}},"content":"[Docusaurus \u535a\u5ba2\u529f\u80fd](https://docusaurus.io/docs/blog) \u7531 [blog \u63d2\u4ef6](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog) \u63d0\u4f9b\u652f\u6301\u3002\\n\\n\u4f7f\u7528 `\x3c!--` `truncate` `--\x3e` \u6ce8\u91ca\u6765\u9650\u5236\u535a\u5ba2\u9884\u89c8\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n\u53ea\u9700\u8981\u5c06 Markdown \u6587\u4ef6\uff08\u6216\u6587\u4ef6\u5939\uff09\u6dfb\u52a0\u5230 `blog` \u76ee\u5f55\u5373\u53ef\u3002\\n\\n\u5e38\u7528\u7684\u535a\u5ba2\u4f5c\u8005\u53ef\u4ee5\u6dfb\u52a0\u5230 `authors.yml` \u4e2d\u3002\\n\\n\u53ef\u4ee5\u4ece\u6587\u4ef6\u540d\u4e2d\u63d0\u53d6\u535a\u5ba2\u6587\u7ae0\u65e5\u671f\uff0c\u4f8b\u5982\uff1a\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\n\u5199\u535a\u5ba2\u65f6\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u5728\u540c\u7ea7\u6587\u4ef6\u5939\u5185\u5f15\u7528\u56fe\u50cf\uff1a\\n\\n![Docusaurus \u6bdb\u7ed2\u73a9\u5177](./docusaurus-plushie-banner.jpeg)\\n\\n\u535a\u5ba2\u4e5f\u652f\u6301\u6807\u7b7e\uff01\\n\\n**\u5982\u679c\u4e0d\u9700\u8981\u535a\u5ba2**\uff1a\u5220\u9664\u6b64\u76ee\u5f55\uff0c\u5e76\u5728 Docusaurus \u914d\u7f6e\u4e2d\u4f7f\u7528 `blog: false` \u5373\u53ef\u3002"}]}')}}]);