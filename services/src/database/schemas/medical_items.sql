CREATE TABLE medical_items (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,

    item_name VARCHAR(255) NOT NULL,
    category ENUM('Medicine', 'Medical Supply', 'Equipment', 'Other') NOT NULL DEFAULT 'Medical Supply',

    unit VARCHAR(32) NOT NULL,
    quantity DECIMAL(10,2) NOT NULL DEFAULT 0,
    reorder_level DECIMAL(10,2) NOT NULL DEFAULT 0,

    expiration_date DATE NULL,

    status ENUM('Available', 'Low Stock', 'Out of Stock', 'Expired', 'Inactive')
        NOT NULL DEFAULT 'Available',

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    UNIQUE KEY uq_medical_items_name (item_name)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;