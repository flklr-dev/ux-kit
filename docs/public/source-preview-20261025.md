# Build a skill archive

Most users can install directly from GitHub. Use a standalone archive when distributing an inspected copy in an environment that needs manual installation.

From the repository root:

```sh
python -m scripts.release_package archive --source skills/ux-kit --output dist/ux-kit.zip
```

The command refuses to overwrite an existing file. It packages the complete skill folder, preserves its license and prints a SHA-256 archive/content manifest. Record the source commit and your Python/compression-library versions when comparing artifacts.

The archive builder sorts paths and fixes timestamps, permissions and origin metadata. Identical input bytes under the same toolchain produce matching artifacts; different compression libraries can produce different compressed bytes. Check extracted file hashes when comparing payload content.

For a manual installation, extract the complete `ux-kit/` folder into your agent's supported skill directory. [Installation instructions](installation.md)
