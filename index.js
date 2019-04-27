// index.js
/*var tasks = [
    { task: 'task1', isDone: true, tags: ['project1', 'memo'] },
    { task: 'task2', isDone: false, tags: ['project1', 'memo'] },
    { task: 'task3', isDone: false, tags: ['project2', 'asap'] }
];

var data = JSON.stringify(tasks);
var a = document.createElement('a');
a.textContent = 'export';
a.download = 'tasks.json';
a.href = window.URL.createObjectURL(new Blob([data], { type: 'text/plain' }));
a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');

var exportLink = document.getElementById('export-link');
exportLink.appendChild(a);
*/

download = function (data){
  var blob = new Blob(data, {type: "text/plain"});
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.target = '_blank';
  a.download = 'hoge.txt';
  a.click();
}

document.getElementById('download').addEventListener('click', function() {
  var dat = [[1, 2, 3, '\n'], [1, 1, 1, '\n']];
  download(dat);
});