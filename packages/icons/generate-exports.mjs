// packages/icons/generate-exports.mjs
import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';

const componentsDir = path.join(process.cwd(), 'src', 'components');
const mainIndexFile = path.join(process.cwd(), 'src', 'index.ts');

async function generateExports() {
  try {
    const componentDirs = await glob('*/', { cwd: componentsDir });

    // Generate index.ts for each subdirectory
    for (const dir of componentDirs) {
      const dirPath = path.join(componentsDir, dir);
      // --- THIS IS THE FIX ---
      // Ignore any file named 'index.tsx' to prevent circular exports.
      const files = await glob('*.tsx', { cwd: dirPath, ignore: 'index.tsx' });
      const indexContent = files
        .map(file => {
          const componentName = path.basename(file, '.tsx');
          return `export { default as ${componentName} } from './${componentName}.js';`;
        })
        .join('\n');
      await fs.writeFile(path.join(dirPath, 'index.ts'), indexContent);
      console.log(`Generated index.ts for ${dir}`);
    }

    // Generate main index.ts
    const mainIndexContent = componentDirs
      .map(dir => {
        const dirName = dir.endsWith('/') ? dir.slice(0, -1) : dir;
        return `export * from './components/${dirName}/index.js';`;
      })
      .join('\n');
    await fs.writeFile(mainIndexFile, mainIndexContent);
    console.log(`Generated main index.ts at ${mainIndexFile}`);
  } catch (error) {
    console.error('Error generating exports:', error);
    process.exit(1);
  }
}

generateExports();