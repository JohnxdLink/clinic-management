CREATE TABLE medical_inventory (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,

    medical_item_id BIGINT UNSIGNED NOT NULL,

    transaction_type ENUM('Stock In', 'Stock Out', 'Adjustment', 'Expired', 'Damaged')
        NOT NULL,

    quantity DECIMAL(10,2) NOT NULL,

    transaction_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    remarks TEXT NULL,

    recorded_by BIGINT UNSIGNED NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id),

    CONSTRAINT fk_medical_inventory_item FOREIGN KEY (medical_item_id) REFERENCES medical_items(id) ON DELETE CASCADE,
    CONSTRAINT fk_medical_inventory_staff FOREIGN KEY (recorded_by) REFERENCES staffs(id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;