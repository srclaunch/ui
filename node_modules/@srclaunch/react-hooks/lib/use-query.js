import { useLocation } from 'react-router-dom';
import { useState } from 'React';
export function useQuery() {
    const [queryString, setQueryString] = useState('');
    return new URLSearchParams(useLocation().search);
}
//# sourceMappingURL=use-query.js.map