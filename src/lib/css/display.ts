export function getDisplayPropertyValue(as?: string) {
  switch (as) {
    case 'a':
      return 'inline';
    case 'button':
      return 'inline-block';
    case 'div':
      return 'flex';
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
    case 'label':
      return 'inline-flex';
    case 'input':
      return 'inline';
    case 'p':
      return 'block';
    case 'select':
      return 'inline';
    case 'small':
      return 'contents';
    case 'span':
      return 'contents';
    case 'textarea':
      return 'inline';
    default:
      return 'inline';
  }
}
