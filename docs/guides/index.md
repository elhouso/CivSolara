<script setup lang="ts">
  import { useData, defineClientComponent } from 'vitepress'

  const VPdfViewer = defineClientComponent(() => {
    return import( /* @vite-ignore */ '@vue-pdf-viewer/viewer').then(({ VPdfViewer }) => VPdfViewer)
  })

  const { isDark } = useData()
</script>

# New Player Guides

This page is a guide designed to educate you and other new players who are new to CivMC server. It teaches you how to take use and take advantage of the CivMC's plugins such as Hiddenore and NameLayer.

[Click here to open New Player Guide (PDF Viewer)](https://civif.net/Civmc-New-Player-Guide.pdf)

Or click this direct URL to open guide via PDF Viewer: <https://civif.net/Civmc-New-Player-Guide.pdf>

<div class="pdf-viewer-wrapper">
    <VPdfViewer src="docs\public\Civmc-New-Player-Guide.pdf"
        :dark-mode="isDark"
        @update:dark-mode="isDark = $event"
    />
</div>

<style scoped>
  .pdf-viewer-wrapper {
    width: 100%;
    height: 700px;
    margin: 20px auto;
  }
</style>
