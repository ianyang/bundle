# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140306084852) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "items", force: true do |t|
    t.string   "title"
    t.string   "description"
    t.integer  "price"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
    t.integer  "transaction_id"
  end

  add_index "items", ["transaction_id"], name: "index_items_on_transaction_id", using: :btree

  create_table "transactions", force: true do |t|
    t.integer  "price",         default: 0
    t.integer  "discount_rate", default: 0
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email"
    t.string   "token"
  end

  add_index "transactions", ["token"], name: "index_transactions_on_token", using: :btree

end
