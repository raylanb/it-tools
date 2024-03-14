import { Link } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Github to jsdelivr',
  path: '/github-to-jsdelivr',
  description: '',
  keywords: ['github', 'to', 'jsdelivr'],
  component: () => import('./github-to-jsdelivr.vue'),
  icon: Link,
  createdAt: new Date('2024-03-14'),
});