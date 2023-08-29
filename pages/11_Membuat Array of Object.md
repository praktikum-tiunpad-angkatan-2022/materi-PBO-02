---
clicks: 4
---

# Membuat Array dari Object

<div class='grid grid-cols-2 mt-4'>

```java {all|5|7-9|11-13|all}
import child1.File1;

public class Test {
    public static void main(String[] args) {
        File1[] tes = new File1[5];

        for (int i = 0; i < 5; i++) {
            tes[i] = new File1("Ini tes ke-"+i);
        }

        for (File1 f : tes) {
            System.out.println(f.getData());
        }
    }
}
```

<div class='ml-4'>
<div v-click-hide="2" v-click="1" class='text-sm mt-24'>

<carbon-arrow-left class='inline'/> Instansiasi array of object

</div>
<div v-click-hide="3" v-click="2" class='text-sm mt-8'>

<carbon-arrow-left class='inline'/> Pengisian array of object melalui constructornya

</div>

<div v-click-hide="4" v-click="3"  class='text-sm mt-12'>

<carbon-arrow-left class='inline'/> Print isi dari array of object

</div>
</div>

<div v-click="4" class='text-lg font-bold my-auto text-end'>

Output dari kode <carbon-arrow-right class='inline'/>

</div>

<img v-click="4" src='/img/tes-array-objek.png' class='max-w-60 mt-4 mx-auto rounded-md'>
</div>
