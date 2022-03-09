export function getDisplayPropertyValue(as?: string) {
  switch (as) {
    case 'h1':
      return 'block';
    case 'h2':
      return 'block';
    case 'h3':
      return 'block';
    case 'h4':
      return 'block';
    case 'h5':
      return 'block';
    case 'h6':
      return 'block';
    case 'p':
      return 'block';
    case 'span':
      return 'inline';
    case 'div':
      return 'block';
    case 'a':
      return 'inline';
    case 'button':
      return 'inline';
    case 'input':
      return 'inline';
    case 'label':
      return 'inline';
    case 'select':
      return 'inline';
    case 'textarea':
      return 'inline';
    default:
      return 'inline';
  }
}
