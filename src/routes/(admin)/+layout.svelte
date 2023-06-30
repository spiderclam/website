<script>// Your selected Skeleton theme:
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/skeleton.css';

// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import './app.css';

import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

import { AppShell } from '@skeletonlabs/skeleton';
</script>

<div style="display: contents" class="h-full overflow-hidden">
	<AppShell>
		<svelte:fragment slot="header">Header</svelte:fragment>
		<svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>

		<slot />
		
	</AppShell>
</div>
