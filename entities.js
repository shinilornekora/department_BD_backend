import {Sequelize} from "sequelize";
const sequelize = new Sequelize('department', 'postgres', 'shinlass3', {
    host: 'localhost',
    dialect: 'postgres'
});
export const Use = sequelize.define('use', {
    contract: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    hard_naming: {
        type: Sequelize.STRING,
        allowNull: true
    },
    user_naming: {
        type: Sequelize.STRING,
        allowNull: true,
    }
}, {
    timestamps: false,
    freezeTableName: true,
});

export const Software = sequelize.define('software', {
    soft_name: {
        type: Sequelize.STRING,
        allowNull: true,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    category: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    dep_manager: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    prod_name: {
        type: Sequelize.STRING,
        allowNull: true,
    }
}, {
    timestamps: false,
    freezeTableName: true,
});

export const Producer = sequelize.define('producer', {
    prod_name: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    j_adress: {
        type: Sequelize.STRING,
        allowNull: true
    },
    form_aq: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    ent_date: {
        type: Sequelize.DATE,
        allowNull: true,
    }
}, {
    timestamps: false,
    freezeTableName: true,
});

export const Install = sequelize.define('install', {
    contract: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    hard_name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    soft_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    licence_key: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    act_date: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    end_date: {
        type: Sequelize.DATE,
        allowNull: true,
    },

}, {
    timestamps: false,
    freezeTableName: true,
});

export const Hardware = sequelize.define('hardware', {
    inventory_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    type_: {
        type: Sequelize.STRING,
        allowNull: true
    },
    enroll_date: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    ex_date: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    dis_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    dep_manager: {
        type: Sequelize.STRING,
        allowNull: true,
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export const Employee = sequelize.define('employee', {
    passport_data: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    position_: {
        type: Sequelize.STRING,
        allowNull: true
    },
    enter_date: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    salary: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    phone_number: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    e_mail: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    credentials: {
        type: Sequelize.STRING,
        allowNull: true,
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export const Distributor = sequelize.define('distributor', {
    orgname: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    jstatus: {
        type: Sequelize.STRING,
        allowNull: true
    },
    contactnumber: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    specialization: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export const Department = sequelize.define('department', {
    name_: {
        type: Sequelize.STRING,
        allowNull: true,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    create_date: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    dep_manager: {
        type: Sequelize.STRING,
        allowNull: true,
    },
}, {
    timestamps: false,
    freezeTableName: true,
});