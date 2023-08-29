---
clicks: 3
---

# Enkapsulasi (contoh)

<div class="grid grid-cols-2 gap-4">

<div>

```java {all|4}
package child1;

public class File1 {
    private String data;

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

<span v-click="1">

Ketika variabel `data` dijadikan `private`...

</span>

</div>

<div v-click="2">

```java {9-10|all}
package child2;

import child1.File1;

public class File2 {
    public static void main(String[] args) {
        File1 test = new File1("Tes package!");

        System.out.println(test.data);

        System.out.println(test.getData());
    }
}
```

<span v-click="2">

Pemanggilan variabel `data` pada class lain
akan menghasilkan <span class='text-red'>error</span>

</span>

</div>

</div>
