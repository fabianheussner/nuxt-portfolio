<template>
  <main class="wrapper">
    <ContentDoc>
      <template #not-found>
        <div class="error text-center my-40">
          <div class="error__container max-w-md mx-auto">
            <Type variant="title-small" class="mb-4">Page not found</Type>
            <Type variant="body-large" class="mb-8"
              >Sorry for the inconvenience. Something went wrong or the page
              doesn't exist anymore.</Type
            >
            <Button to="/">Back to home</Button>
          </div>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>
