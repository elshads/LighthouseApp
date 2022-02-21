<script>
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Underline from '@tiptap/extension-underline';
	import TaskList from '@tiptap/extension-task-list';
	import TaskItem from '@tiptap/extension-task-item';
	import Placeholder from '@tiptap/extension-placeholder';
	import Link from '@tiptap/extension-link';
	import Highlight from '@tiptap/extension-highlight';
	import TextAlign from '@tiptap/extension-text-align';
	import Image from '@tiptap/extension-image';

	export let content;
	let element;
	let editor;

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [
				StarterKit.configure({
					code: {
						HTMLAttributes: {
							class: 'tt-code'
						}
					},
					codeBlock: {
						HTMLAttributes: {
							class: 'tt-codeblock'
						}
					}
				}),
				Underline,
				TaskList,
				TaskItem,
				TextAlign.configure({
					types: ['heading', 'paragraph']
				}),
				Placeholder.configure({
					placeholder: 'Write something …'
				}),
				Link.configure({
					openOnClick: true,
					HTMLAttributes: {
						class: 'tt-link'
					}
				}),
				Highlight.configure({ multicolor: true }),
				Image.configure({
					HTMLAttributes: {
						class: 'tt-image'
					},
					allowBase64: true
				})
			],
			content,
			onUpdate: ({ editor }) => {
				content = editor.getJSON();
			},
			onTransaction: () => {
				editor = editor;
			}
		});
        editor.setEditable(false);
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div>
	<div class="tt-content">
		<div bind:this={element} />
	</div>
</div>