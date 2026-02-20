document.addEventListener("DOMContentLoaded", () => {
const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");
  
const convertMarkdown = () => {
  let markdown = markdownInput.value;

  markdown = markdown.replace(/^(#{1,6})\s*(.+)$/gm, (match, hashes, title) => {
    const level = hashes.length;
    return `<h${level}>${title.trim()}</h${level}>`;
  });

  markdown = markdown.replace(/\*\*([^\n]+?)\*\*/g, `<strong>$1</strong>`);
  markdown = markdown.replace(/__([^\n]+?)__/g, `<strong>$1</strong>`);

  markdown = markdown.replace(/\*([^\n]+?)\*/g, `<em>$1</em>`);
  markdown = markdown.replace(/_([^\n]+?)_/g, `<em>$1</em>`);

  markdown = markdown.replace(
    /!\[([^\]]+)\]\(([^)]+)\)/g,
    `<img alt="$1" src="$2">`
  );

  markdown = markdown.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    `<a href="$2">$1</a>`
  );

  markdown = markdown.replace(
    /^>\s+([^\n]+)/gm,
    `<blockquote>$1</blockquote>`
  );

  return markdown.trim();
};

markdownInput.addEventListener("input", () => {
  const result = convertMarkdown();
  htmlOutput.textContent = result;
  preview.innerHTML = result;
});
});
