# Access Modifier

Berdasarkan apakah class dapat diakses oleh class lain

<br>

|                   | class yang satu package | class beda package | subclass yang satu package | subclass beda package |
| ----------------- | ----------------------- | ------------------ | -------------------------- | --------------------- |
| public            | ✅                      | ✅                 | ✅                         | ✅                    |
| protected         | ✅                      | ❌                 | ✅                         | ✅                    |
| package (default) | ✅                      | ❌                 | ✅                         | ❌                    |
| private           | ❌                      | ❌                 | ❌                         | ❌                    |
