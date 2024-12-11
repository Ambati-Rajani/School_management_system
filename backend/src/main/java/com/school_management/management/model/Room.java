package com.school_management.management.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

@Document(collection = "rooms")
public class Room {

    @Id
    private String id;
    private String roomNumber;
    private Integer capacity;
    private List<String> availableTimeslots;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(String roomNumber) {
        this.roomNumber = roomNumber;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public List<String> getAvailableTimeslots() {
        return availableTimeslots;
    }

    public void setAvailableTimeslots(List<String> availableTimeslots) {
        this.availableTimeslots = availableTimeslots;
    }
}
