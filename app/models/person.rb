class Person < ApplicationRecord
  has_one :tag
  
  has_one_attached :person_image

  def test_url
    Rails.application.routes.url_helpers.rails_blob_path(self.person_image, only_path: true)
  end
end
