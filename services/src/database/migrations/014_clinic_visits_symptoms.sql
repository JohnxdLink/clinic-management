CREATE TABLE clinic_visit_symptoms (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,

    clinic_visit_id BIGINT UNSIGNED NOT NULL,
    symptom_id BIGINT UNSIGNED NOT NULL,

    notes VARCHAR(255) NULL,

    PRIMARY KEY (id),

    UNIQUE KEY uq_clinic_visit_symptom (
        clinic_visit_id,
        symptom_id
    ),

    CONSTRAINT fk_clinic_visit_symptoms_visit
        FOREIGN KEY (clinic_visit_id)
        REFERENCES clinic_visits(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_clinic_visit_symptoms_symptom
        FOREIGN KEY (symptom_id)
        REFERENCES symptoms(id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;