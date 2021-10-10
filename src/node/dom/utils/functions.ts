export function escapeHTMLEntities(html: string): string {
  return html.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


export function escapeCData(text: string): string {
  return `<![CDATA[${text}]]>`;
}


export function escapeComment(comment: string): string {
  return `<!--${comment}-->`;
}