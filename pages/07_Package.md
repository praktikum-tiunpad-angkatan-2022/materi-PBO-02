---
clicks: 2
---

# Package

<div class='grid grid-cols-2 mt-4'>

```java {all|1|4-16}
package child1;

public class File1 {
    String data;

    public File1(String data) {
        this.data = data;
    }

    public String getData() {
        return this.data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
```

<div class='ml-4'>
<div v-click-hide="2" v-click='1' class='text-sm mt-4'>
<carbon-arrow-left class='inline'/> Deklarasi package
</div>
<div v-click="2" class='text-sm mt-32'>
<carbon-arrow-left class='inline'/> Isi dari class
</div>
</div>
</div>
