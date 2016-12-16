export function selectText(event) {
  const element = document.getElementById(event.currentTarget.id);
  element.setSelectionRange(0, element.value.length);
}
