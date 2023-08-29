# Package (lanjutan)

<div class="grid grid-cols-2 gap-4">

<div>

```java
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

Contoh File1.java

</div>

<div>

```java
package child2;

import child1.File1;

public class File2 {
    public static void main(String[] args) {
        File1 test = new File1("Tes package!");

        System.out.println(test.getData());
    }
}
```

Contoh File2.java

</div>
</div>
