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
	import Image from '@tiptap/extension-image';

	let element;
	let editor;
	let json;

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
						class: 'my-custom-class'
					},
					allowBase64: true
				})
			],
			content: '',
			onUpdate: ({ editor }) => {
				json = editor.getHTML();
			},
			onTransaction: () => {
				editor = editor;
			}
		});
		json = editor.getHTML();
	});

	function addImage() {
		const image = document.getElementById('file-input').click();
		if (image) {
			editor.chain().focus().setImage({ src: image }).run();
		}
	}

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div class="tt-container">
	{#if editor}
		<div class="tt-header">
			<button
				class="tt-btn"
				on:click={() => editor.chain().focus().undo().run()}
				disabled={!editor.can().undo()}
			>
				<i class="bi bi-arrow-counterclockwise" />
			</button>

			<button
				class="tt-btn"
				on:click={() => editor.chain().focus().redo().run()}
				disabled={!editor.can().redo()}
			>
				<i class="bi bi-arrow-clockwise" />
			</button>

			<span class="tt-separator" />

			<button
				class="tt-btn"
				on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
				class:active={editor.isActive('heading', { level: 1 })}
			>
				<i class="bi bi-type-h1" />
			</button>

			<button
				class="tt-btn"
				on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				class:active={editor.isActive('heading', { level: 2 })}
			>
				<i class="bi bi-type-h2" />
			</button>

			<button
				class="tt-btn"
				on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
				class:active={editor.isActive('heading', { level: 3 })}
			>
				<i class="bi bi-type-h3" />
			</button>

			<button
				class="tt-btn"
				on:click={() => editor.chain().focus().setParagraph().run()}
				class:active={editor.isActive('paragraph')}
			>
				P
			</button>

			<span class="tt-separator" />

			<button
				class="tt-btn"
				on:click={() => editor.chain().focus().toggleBold().run()}
				class:active={editor.isActive('bold') ? 'is-active' : ''}
			>
				<i class="bi bi-type-bold" />
			</button>

			<button
				class="tt-btn"
				on:click={() => editor.chain().focus().toggleItalic().run()}
				class:active={editor.isActive('italic') ? 'is-active' : ''}
			>
				<i class="bi bi-type-italic" />
			</button>

			<button
				class="tt-btn"
				on:click={() => editor.chain().focus().toggleUnderline().run()}
				class:active={editor.isActive('underline') ? 'is-active' : ''}
			>
				<i class="bi bi-type-underline" />
			</button>

			<button
				class="tt-btn"
				on:click={() => editor.chain().focus().toggleStrike().run()}
				class:active={editor.isActive('strike') ? 'is-active' : ''}
			>
				<i class="bi bi-type-strikethrough" />
			</button>

			<span class="tt-separator" />

			<button
				class="tt-btn"
				on:click={() => editor.chain().focus().toggleCode().run()}
				class:active={editor.isActive('code') ? 'is-active' : ''}
			>
				<i class="bi bi-braces" />
			</button>

			<button
				class="tt-btn"
				on:click={() => editor.chain().focus().toggleCodeBlock().run()}
				class:active={editor.isActive('codeBlock') ? 'is-active' : ''}
			>
				<i class="bi bi-code-slash" />
			</button>

			<button
				class="tt-btn"
				on:click={() => editor.chain().focus().toggleLink().run()}
				class:active={editor.isActive('link') ? 'is-active' : ''}
			>
				<i class="bi bi-link-45deg" />
			</button>

			<span class="tt-separator" />

			<button
				class="tt-btn"
				on:click={() => editor.chain().focus().toggleTaskList().run()}
				class:active={editor.isActive('taskList') ? 'is-active' : ''}
			>
				<i class="bi bi-check-square" />
			</button>

			<button
				class="tt-btn"
				on:click={() => editor.chain().focus().liftListItem('taskItem').run()}
				disabled={!editor.can().liftListItem('taskItem')}
			>
				<i class="bi bi-text-indent-right" />
			</button>

			<button
				class="tt-btn"
				on:click={() => editor.chain().focus().sinkListItem('taskItem').run()}
				disabled={!editor.can().sinkListItem('taskItem')}
			>
				<i class="bi bi-text-indent-left" />
			</button>

			<span class="tt-separator" />

			<button class="tt-btn" on:click={() => editor.chain().focus().setHorizontalRule().run()}>
				<i class="bi bi-arrow-bar-down" />
			</button>

			<button class="tt-btn" on:click={addImage}><i class="bi bi-image" /></button>

			<span class="tt-separator" />

			<button
				class="tt-btn-highlighter bg-pink"
				on:click={() => editor.chain().focus().toggleHighlight({ color: '#f9dae1' }).run()}
				class:active={editor.isActive('highlight', { color: '#f9dae1' }) ? 'is-active' : ''}
			>
				<i class="bi bi-dot" />
			</button>

			<button
				class="tt-btn-highlighter bg-yellow"
				on:click={() => editor.chain().focus().toggleHighlight({ color: '#faf594' }).run()}
				class:active={editor.isActive('highlight', { color: '#faf594' }) ? 'is-active' : ''}
			>
				<i class="bi bi-dot" />
			</button>

			<button
				class="tt-btn-highlighter bg-blue"
				on:click={() => editor.chain().focus().toggleHighlight({ color: '#beebfa' }).run()}
				class:active={editor.isActive('highlight', { color: '#beebfa' }) ? 'is-active' : ''}
			>
				<i class="bi bi-dot" />
			</button>

			<button
				class="tt-btn-highlighter bg-green"
				on:click={() => editor.chain().focus().toggleHighlight({ color: '#befac8' }).run()}
				class:active={editor.isActive('highlight', { color: '#befac8' }) ? 'is-active' : ''}
			>
				<i class="bi bi-dot" />
			</button>
		</div>
	{/if}
	<div class="tt-content">
		<div bind:this={element} />
	</div>

	<input id="file-input" type="file" name="name" style="display: none;" />
</div>

<div>{json}</div>
