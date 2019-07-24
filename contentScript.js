const statsBlock = new StatsBlock();

document.body.appendChild(statsBlock.element);
document.body.addEventListener('input', statsBlock.recacl.bind(statsBlock));
