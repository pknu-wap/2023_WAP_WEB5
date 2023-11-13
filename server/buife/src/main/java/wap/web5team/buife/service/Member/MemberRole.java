package wap.web5team.buife.service.Member;

import lombok.Getter;

public enum MemberRole {
    ADMIN("ROLE_ADMIN"),
    USER("ROLE_USER");

    MemberRole(String value) {
        this.value = value;
    }

    private String value;

    public String getValue() {
        return value;
    }
}
