CREATE TABLE symptoms (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,

    symptom_name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NULL,

    status ENUM('Active', 'Inactive') NOT NULL DEFAULT 'Active',

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    UNIQUE KEY uq_symptoms_name (symptom_name)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;