package org.launchcode.backend.model;


import java.util.Objects;
import java.util.concurrent.atomic.AtomicLong;

public abstract class AbstractEntity {
    private String id;

    public String getId() {
        return id;
    }

    private static AtomicLong idCounter = new AtomicLong();

    public static String createID()
    {
        return String.valueOf(idCounter.getAndIncrement());
    }

    public void setId() {
        this.id = createID();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AbstractEntity that = (AbstractEntity) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }


}
