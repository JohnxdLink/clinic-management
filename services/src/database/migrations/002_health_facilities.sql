CREATE TABLE health_facilities (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,

    facility_name VARCHAR(255) NOT NULL,

    facility_type ENUM('Clinic', 'Hospital', 'Health Center', 'Other')
        NOT NULL DEFAULT 'Clinic',

    address VARCHAR(255) NULL,

    contact_number VARCHAR(32) NULL,
    emergency_number VARCHAR(32) NULL,

    contact_person VARCHAR(255) NULL,

    status ENUM('Active', 'Inactive')
        NOT NULL DEFAULT 'Active',

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    UNIQUE KEY uq_health_facilities_name (facility_name)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;