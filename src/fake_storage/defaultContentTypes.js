export const contentTypes = [
  {
    name: 'Article',
    fields: [
      {
        label: 'Body',
        machine_name: 'body',
        field_type: '	Text (formatted, long, with summary)',
      },
      {
        label: 'Media Image',
        machine_name: 'field_media_image',
        field_type: 'Entity reference',
      },
      {
        label: 'Tags',
        machine_name: 'field_tags',
        field_type: 'Entity reference',
      },

    ]
  },
  {
    name: 'Basic Page',
    fields: [
      {
        label: 'Body',
        machine_name: 'body',
        field_type: '	Text (formatted, long, with summary)',
      },
    ]
  },
  {
    name: 'Recipe',
    fields: [
      {
        label: 'Cooking time',
        machine_name: 'field_cooking_time',
        field_type: 'Number (integer)',
      },
      {
        label: 'Difficulty',
        machine_name: 'field_difficulty',
        field_type: 'List (text)',
      },
      {
        label: 'Ingredients',
        machine_name: 'field_ingredients',
        field_type: 'Text (plain)',
      },
      {
        label: 'Media Image',
        machine_name: 'field_media_image',
        field_type: 'Entity reference',
      },
      {
        label: 'Number of servings',
        machine_name: 'field_number_of_servings',
        field_type: 'Number (integer)',
      },
      {
        label: 'Preparation time',
        machine_name: 'field_preparation_time',
        field_type: 'Number (integer)',
      },
      {
        label: 'Recipe category',
        machine_name: 'field_recipe_category',
        field_type: 'Entity reference',
      },
      {
        label: 'Recipe instruction',
        machine_name: 'field_recipe_instruction',
        field_type: 'Text (formatted, long)',
      },
      {
        label: 'Summary',
        machine_name: 'field_summary',
        field_type: 'Text (formatted, long)',
      },
      {
        label: 'Tags',
        machine_name: 'field_tags',
        field_type: 'Entity reference',
      },
    ],
  }
]
