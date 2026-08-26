CREATE TABLE clinic_visits (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,

    health_record_id BIGINT UNSIGNED NOT NULL,

    visit_date DATE NOT NULL,
    time_in TIME NOT NULL,
    time_out TIME NULL,

    reason VARCHAR(255) NOT NULL,
    symptoms TEXT NULL,
    treatment TEXT NULL,
    remarks TEXT NULL,

    recorded_by BIGINT UNSIGNED NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    CONSTRAINT fk_clinic_visits_health_record FOREIGN KEY (health_record_id) REFERENCES health_records(id) ON DELETE CASCADE,
    CONSTRAINT fk_clinic_visits_recorded_by FOREIGN KEY (recorded_by) REFERENCES staffs(id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;