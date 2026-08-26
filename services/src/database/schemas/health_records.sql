CREATE TABLE health_records (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,

    student_id BIGINT UNSIGNED NULL,
    staff_id BIGINT UNSIGNED NULL,

    blood_type VARCHAR(8) NULL,
    allergies TEXT NULL,
    medical_condition TEXT NULL,
    current_medications TEXT NULL,

    emergency_contact_name VARCHAR(255) NULL,
    emergency_contact_number VARCHAR(32) NULL,
    emergency_contact_relationship VARCHAR(64) NULL,

    notes TEXT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    UNIQUE KEY uq_health_records_student_id (student_id),
    UNIQUE KEY uq_health_records_staff_id (staff_id),

    CONSTRAINT fk_health_records_student FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    CONSTRAINT fk_health_records_staff FOREIGN KEY (staff_id) REFERENCES staffs(id) ON DELETE CASCADE,

    CHECK (
        (student_id IS NOT NULL AND staff_id IS NULL)
        OR
        (student_id IS NULL AND staff_id IS NOT NULL)
    )

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;