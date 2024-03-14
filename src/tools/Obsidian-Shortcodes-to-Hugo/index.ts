import { Blockquote } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Obsidian Shortcodes to Hugo',
  path: '/Obsidian-Shortcodes-to-Hugo',
  description: '',
  keywords: ['Obsidian', 'Shortcodes', 'to', 'Hugo'],
  component: () => import('./Obsidian-Shortcodes-to-Hugo.vue'),
  icon: Blockquote,
  createdAt: new Date('2024-03-14'),
});